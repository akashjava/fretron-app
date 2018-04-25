export interface Device {
	imei?: null | undefined | string;
	mobileNumber?: null | undefined | string;
	manufacturerName?: null | undefined | string;
	uuid?: null | undefined | string;
	isAssociated?: null | undefined | string;
	isDeleted?: null | undefined | string;
	createTime?: null | undefined | number;
	updateTime?: null | undefined | number;
	groups?: null | undefined | string[];
	orgId?: null | undefined | string;
	status?: null | undefined | string;
	sharedWith?: null | undefined | string[];
}

export interface Driver {
	name?: null | undefined | string;
	mobileNumber?: null | undefined | string;
	uuid?: null | undefined | string;
	orgId?: null | undefined | string;
	dlNumber?: null | undefined | string;
	dlExpiryTime?: null | undefined | number;
}

export interface LitePosition {
	latitude: number;
	longitude: number;
	speed: number;
	course?: null | undefined | number;
	decoder?: null | undefined | string;
	time?: null | undefined | number;
	imei: string;
	vehicleId?: null | undefined | string;
	address?: null | undefined | string;
	lngLat?: null | undefined | number[];
	isFillingEnabled: boolean;
}

export enum GPSState { Stopped, Moving, Overspeeding, Disconnected, Unknown };

export interface PointAtTime {
	timestamp?: null | undefined | number;
	latitude?: null | undefined | number;
	longitude?: null | undefined | number;
}

export interface TimeAwarePolyline {
	polyline?: null | undefined | string;
	compressedPolyline?: null | undefined | string;
	lastPoint: PointAtTime;
	isAssumed: boolean;
	totalPoints?: null | undefined | number;
}

export interface VehicleGpsState {
	isManuallyAdded: boolean;
	isIgnore: boolean;
	startTime: number;
	endTime: number;
	startLocation: LitePosition;
	endLocation: LitePosition;
	sigmasq: number;
	mean: LitePosition;
	totalDistance: number;
	totalTime: number;
	averageOfSpeed: number;
	averageSpeeds: number;
	numberOfRecord: number;
	lateArrivedRecordsCount?: null | undefined | number;
	imei: string;
	vehicleId?: null | undefined | string;
	uuid?: null | undefined | string;
	state?: null | undefined | GPSState;
	encodedPolyline?: null | undefined | string;
	timeAwarePolyline?: null | undefined | TimeAwarePolyline;
	polylineSegments?: null | undefined | TimeAwarePolyline[];
	recalculatedDistance?: null | undefined | number;
	odoMeter?: null | undefined | number;
	lastOdoMeterReading?: null | undefined | number;
	isDisconnected: boolean;
	eventType?: null | undefined | string;
}

export enum OrganisationType { FLEET_OWNER, TRANSPORTER, FLEET_OWNER_AGENT };

export interface Organisation {
	uuid?: null | undefined | string;
	orgId?: null | undefined | string;
	organisationName?: null | undefined | string;
	type: OrganisationType;
	addedBy?: null | undefined | string;
}

export interface Location {
	latitude: number;
	longitude: number;
}

export interface Circle {
	center: Location;
	radius: number;
}

export enum GeofenceType { Proximity, Polygon };

export interface Geofence {
	center: Location;
	boundry?: null | undefined | Location[];
	circle?: null | undefined | Circle;
	type?: null | undefined | GeofenceType;
}

export enum FreightLocType { Private, Public };

export interface FreightLocation {
	name: string;
	geofence?: null | undefined | Geofence;
	material?: null | undefined | string[];
	address?: null | undefined | string;
	uuid?: null | undefined | string;
	orgId?: null | undefined | string;
	favouriteOf?: null | undefined | string[];
	type?: null | undefined | FreightLocType;
	isDeleted?: null | undefined | boolean;
}

export interface TripLocation {
	freightLocation?: null | undefined | FreightLocation;
	fromTime?: null | undefined | number;
	tillTime?: null | undefined | number;
	firstGpsLogId?: null | undefined | string;
	lastGpsLogId?: null | undefined | string;
	ignoredVehicleGpsLogs?: null | undefined | string[];
	updatedBy?: null | undefined | string;
	updatedAt?: null | undefined | number;
}

export interface Lane {
	sources?: null | undefined | FreightLocation[];
	destination?: null | undefined | FreightLocation[];
	material?: null | undefined | string[];
	baseSource?: null | undefined | FreightLocation;
	baseDestination?: null | undefined | FreightLocation;
	baseMaterial?: null | undefined | string;
	baseRate?: null | undefined | number;
	sourceOffSet?: null | undefined | number[];
	destinationOffSet?: null | undefined | number[];
	materialOffSet?: null | undefined | number[];
	baseTransitDays?: null | undefined | number;
}

export enum TripState { Created, Started, Completed };

export enum TrackingType { Tracker, Trip, Manual };

export interface Trip {
	distance?: null | undefined | number;
	quantityOfMaterial?: null | undefined | number;
	unitOfQuantity?: null | undefined | string;
	driverName?: null | undefined | string;
	driverMobNumber?: null | undefined | string;
	remarks?: null | undefined | string;
	vehicleId?: null | undefined | string;
	origin?: null | undefined | TripLocation[];
	destination?: null | undefined | TripLocation[];
	material?: null | undefined | string;
	tripId?: null | undefined | string;
	actualStartTime?: null | undefined | number;
	actualEndTime?: null | undefined | number;
	plannedStartTime?: null | undefined | number;
	plannedEndTime?: null | undefined | number;
	lane?: null | undefined | Lane;
	tripState?: null | undefined | TripState;
	deviceImei?: null | undefined | string;
	shipmentId?: null | undefined | string;
	trackingType?: null | undefined | TrackingType;
	orgId?: null | undefined | string;
	expectedDestinations?: null | undefined | FreightLocation[];
	reprocessTill?: null | undefined | number;
	sharedWith?: null | undefined | string[];
	liveliness?: null | undefined | string;
	isOffTrack: boolean;
	offTrackSince?: null | undefined | number;
	expectedSystemResolution?: null | undefined | string;
	createdAt?: null | undefined | number;
}

export interface Vehicle {
	customerId?: null | undefined | string;
	vehicleType?: null | undefined | string;
	vehicleModel?: null | undefined | string;
	vehicleMake?: null | undefined | string;
	vtsDeviceId?: null | undefined | string;
	vehicleRegistrationNumber?: null | undefined | string;
	uuid?: null | undefined | string;
	associatedWith?: null | undefined | string;
	isDeleted?: null | undefined | string;
	createTime?: null | undefined | number;
	updateTime?: null | undefined | number;
	groups?: null | undefined | string[];
	orgId?: null | undefined | string;
	sharedWith?: null | undefined | string[];
	driverId?: null | undefined | string;
}

export interface Token {
	uuid?: null | undefined | string;
	provider?: null | undefined | string;
	token?: null | undefined | string;
}

export interface User {
	uuid?: null | undefined | string;
	name?: null | undefined | string;
	email?: null | undefined | string;
	mobileNumber?: null | undefined | string;
	address?: null | undefined | string;
	authToken?: null | undefined | Token[];
	tokens?: null | undefined | string[];
	onBoardingType?: null | undefined | string;
	otpEnabled?: null | undefined | boolean;
	isGod?: null | undefined | boolean;
}

export interface UserOrgACL {
	orgUuid?: null | undefined | string;
	userUuid?: null | undefined | string;
	accessLevel?: null | undefined | string;
}

export enum VehicleState { WaitingForLoad, EnrouteForPickUp, AtPickUpPoint, EnrouteForDestination, AtDestination };

export interface VehicleTripState {
	deviceImei?: null | undefined | string;
	vehicleId?: null | undefined | string;
	state?: null | undefined | VehicleState;
	tripId?: null | undefined | string;
	startTime?: null | undefined | number;
	endTime?: null | undefined | number;
	uuid?: null | undefined | string;
	latitude?: null | undefined | number;
	longitude?: null | undefined | number;
	address?: null | undefined | string;
}

export interface VehicleTripStateEvents {
	eventName: string;
	tripId?: null | undefined | string;
	vehicleId?: null | undefined | string;
	eventTime?: null | undefined | number;
}

export interface TrackerTrip {
	distance?: null | undefined | number;
	quantityOfMaterial?: null | undefined | number;
	unitOfQuantity?: null | undefined | string;
	driverName?: null | undefined | string;
	driverMobNumber?: null | undefined | string;
	remarks?: null | undefined | string;
	vehicleId?: null | undefined | string;
	origin?: null | undefined | TripLocation[];
	destination?: null | undefined | TripLocation[];
	material?: null | undefined | string;
	tripId?: null | undefined | string;
	actualStartTime?: null | undefined | number;
	actualEndTime?: null | undefined | number;
	plannedStartTime?: null | undefined | number;
	plannedEndTime?: null | undefined | number;
	lane?: null | undefined | Lane;
	tripState?: null | undefined | TripState;
	deviceImei?: null | undefined | string;
	shipmentId?: null | undefined | string;
}

export interface TripGeneratedEvents {
	type: string;
	tripPayload?: null | undefined | Trip;
	vehicleTripStatePayload?: null | undefined | VehicleTripState;
	vehicleTripStateEventPayload?: null | undefined | VehicleTripStateEvents;
	trackerTripPayload?: null | undefined | TrackerTrip;
}

export interface AllInOne {
	device: Device;
	driver: Driver;
	gpsState: VehicleGpsState;
	org: Organisation;
	trip: Trip;
	vehicle: Vehicle;
	user: User;
	orguseracl: UserOrgACL;
	vts: TripGeneratedEvents;
}
