import { UserData } from '@resume-api/types/user-data/UserData';

interface ResumeRecord {
    id: string;
    name: string;
    data: UserData;
    updatedAt: number;
}

export default ResumeRecord;