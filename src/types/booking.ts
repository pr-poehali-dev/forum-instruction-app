export type RequestStatus = 'new' | 'assigned' | 'waiting' | 'approved' | 'resolved' | 'closed';

export interface Request {
  id: string;
  title: string;
  category: string;
  organization: string;
  status: RequestStatus;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
  location?: string;
  comment?: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}
