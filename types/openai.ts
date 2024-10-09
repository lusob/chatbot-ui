import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  GPT_4_O_MINI = 'gpt-4o-mini'
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_4_O_MINI;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_4_O_MINI]: {
    id: OpenAIModelID.GPT_4_O_MINI,
    name: 'GPT-4-O-MINI',
    maxLength: 380000, // Assuming similar features to GPT-4-O
    tokenLimit: 128000, // Assuming similar features to GPT-4-O
  },
};