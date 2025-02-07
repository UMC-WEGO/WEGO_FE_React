export type UserSchedulesData = {
  pastTrips: Schedule[];
};

export type Schedule = {
  tripId: number;
  location: string;
  adult_participants: number;
  child_participants: number;
  vehicle: string;
  startDate: string;
  endDate: string;
  missions: {
    mission: {
      id: number;
      title: string;
      imageUrl: string;
      content: string;
      point: number;
    };
    receivedMission: {
      id: number;
      content: string;
      status: boolean;
      createdAt: string;
      updatedAt: string;
      imgUrl: string;
    };
  }[];
};
