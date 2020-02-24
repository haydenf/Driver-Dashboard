const fetch = require("isomorphic-fetch");
const API_URL = "https://dev.gofar.co/api/";

async function fetchJSON(url, options, authToken) {
  console.log(`Fetching ${url} with authToken ${authToken}`);
  const rawResponse = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: authToken
    },
    ...options
  });
  return await rawResponse.json();
}

async function postJSON(url, payload, options) {
  console.log(url, payload, options);
  const rawResponse = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return await rawResponse.json();
}

async function getVehicleData(vehicleId, authToken) {
  return await fetchJSON(`${API_URL}vehicles/${vehicleId}`, {}, authToken);
}

async function getUserData(userId, authToken) {
  return await fetchJSON(`${API_URL}users/${userId}`, {}, authToken);
}

async function getOwnedVehicles(userId, authToken) {
  return await fetchJSON(
    `${API_URL}users/${userId}/ownedVehicles`,
    {},
    authToken
  );
}

async function getTripsForVehicle(vehicleId, authToken) {
  console.log(`${API_URL}vehicles/${vehicleId}/trips`, authToken);
  return await fetchJSON(
    `${API_URL}vehicles/${vehicleId}/trips?filter={"include":["tags"]}`,
    {},
    authToken
  );
}

async function getRecentTrip(vehicleId, authToken) {
  const originalTrip = `${API_URL}vehicles/${vehicleId}/trips`;
  const recentTrip = new URL(originalTrip);
  recentTrip.searchParams.append(
    "filter",
    JSON.stringify({ order: "createdAt DESC", limit: 1 })
  );
  return await fetchJSON(recentTrip.toString(), {}, authToken);
}

async function getTripDetailsforVehicle(tripId, authToken) {
  return await fetchJSON(
    `${API_URL}trips/${tripId}/tripDetails`,
    {},
    authToken
  );
}

async function getDiagnosticIssueForVehicle(vehicleId, authToken) {
  console.log(`${API_URL}/Vehicles/${vehicleId}/diagnosticTroubleCodes`);
  return await fetchJSON(
    `${API_URL}/vehicles/${vehicleId}/diagnosticTroubleCodes`,
    {},
    authToken
  );
}

async function getRefillData(vehicleId, authToken) {
  const baseRefillURL = `${API_URL}vehicles/${vehicleId}/refills`;
  const refillUrl = new URL(baseRefillURL);
  refillUrl.searchParams.append(
    "filter",
    JSON.stringify({ order: "createdAt DESC", limit: 1 })
  );
  return await fetchJSON(refillUrl.toString(), {}, authToken);
}

async function getTripSummaryData(userId, authToken) {
  const baseTravelDistanceTotalURL = `${API_URL}users/${userId}/summary`;
  const travelDistanceTotalUrl = new URL(baseTravelDistanceTotalURL);
  travelDistanceTotalUrl.searchParams.append(
    "filter",
    JSON.stringify({ order: "createdAt DESC", limit: 1 })
  );
  return await fetchJSON(travelDistanceTotalUrl.toString(), {}, authToken);
}

async function getDetailsForVehicle(userId, vehicleId, authToken, tripId) {
  const [
    vehicleData,
    refillData,
    tripSummaryData,
    tripsForVehicle,
    tripDetailsforVehicle,
    diagnosticIssueForVehicle,
    recentTrip
  ] = await Promise.all([
    getVehicleData(vehicleId, authToken),
    getRefillData(vehicleId, authToken),
    getTripSummaryData(userId, authToken),
    getTripsForVehicle(vehicleId, authToken),
    getTripDetailsforVehicle(tripId, authToken),
    getDiagnosticIssueForVehicle(vehicleId, authToken),
    getRecentTrip(vehicleId, authToken)
  ]);

  console.log("refillData PLEASE LOOK AT THIS LOG", recentTrip);

  const finalResult = {
    id: vehicleId,
    tripId: tripId,
    make: vehicleData.make,
    model: vehicleData.model,
    odometer: vehicleData.calculatedOdometer,
    vehicleName: vehicleData.displayName,
    refillData: refillData,
    odometerAtRefill: refillData.TODO,
    lastFillUp: refillData.TODO,
    lastFillUpTime: refillData.TODO,
    lastLocation: refillData.TODO,
    diagnosticIssue: diagnosticIssueForVehicle,
    diagnosticDetail: "TODO",
    travelSince: recentTrip.TODO,
    businessRatio: tripSummaryData.TODO,
    businessTotal: tripSummaryData.TODO,
    averageSpeed: tripSummaryData.averageSpeed,
    travelDistanceTotal: tripSummaryData.distance,
    timeInCar: tripSummaryData.durationInSeconds,
    emissions: tripSummaryData.co2,
    fuelEconomy: tripsForVehicle.litresPerHundredKm,
    brakingScore: tripSummaryData.brakingScore,
    speedScore: tripSummaryData.speedScore,
    corneringScore: tripSummaryData.corneringScore,
    accelerationScore: tripSummaryData.accelerationScore,
    totalScore: tripSummaryData.score,
    travelDistanceThisYear: 100,
    fuelLeft: 999,
    parking: {
      lat: 99,
      lon: 99
    },
    timeTraveled: tripSummaryData.TODO,
    trips: tripsForVehicle,
    lifeLitresPerHundredKm: tripsForVehicle,
    recentTrip: recentTrip
  };
  return finalResult;
}

async function getLogin(email, password) {
  const loginURL = `${API_URL}users/login`;
  return await postJSON(loginURL.toString(), { email, password });
}

exports.handler = async (event, context) => {
  console.log("Received event", JSON.stringify(event, 3));

  const headers = event && event.headers;
  console.log("context", JSON.stringify(context));

  switch (event.field) {
    case "car": {
      const vehicleId = event.arguments.id;

      const vehicleData = await getDetailsForVehicle(
        headers.userid,
        vehicleId,
        headers.authorization
      );

      return vehicleData;
    }

    case "trip": {
      const tripId = event.arguments.id;

      const tripData = await getDetailsForVehicle(
        headers.userid,
        tripId,
        headers.authorization
      );

      return tripData;
    }

    case "login": {
      const loginResponse = await getLogin(
        event.arguments.email,
        event.arguments.password
      );
      console.log("LoginResponse", loginResponse);
      return {
        userId: loginResponse.userId,
        authToken: loginResponse.id,
        successful: !!loginResponse.id
      };
    }
    case "userData": {
      const ownerData = await getUserData(
        headers.userid,
        headers.authorization
      );
      const ownedVehicles = await getOwnedVehicles(
        headers.userid,
        headers.authorization
      );

      return {
        ...ownerData,
        cars: ownedVehicles
      };
    }
    default:
      return "Unknown field, unable to resolve" + event.field;
  }
};
