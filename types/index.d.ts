interface PatientDetails {
  name: string;
  age: number;
  gender: "Male" | "Female" | "Other";
  contact: string;
}

interface TestDetails {
  name: string;
  description: string;
  cost: number;
}

interface ReportDetails {
  patientId: string;
  testId: string;
  reportData: {
    result: string;
    remarks: string;
    testedAt: Date;
  };
}
