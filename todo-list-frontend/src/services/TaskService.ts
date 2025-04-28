import { API_URL } from "@/http";
import { CompleteTask } from "@/types";
import axios from "axios";

export default class TaskService {
  static async getAllTasks(url: string) {
    try {
      const response = await axios.get(`${API_URL}/${url}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async createTask(data: object) {
    try {
      const response = await axios.post(`${API_URL}/tasks`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async completeTask(id: string, completed: boolean) {
    try {
      const response = await axios.patch(`${API_URL}/tasks/${id}/complete`, {
        completed,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTask(id: string) {
    try {
      const response = await axios.delete(`${API_URL}/tasks/${id}/delete`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}
