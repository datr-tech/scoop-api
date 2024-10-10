import { IControllerScoopInput } from './IControllerScoopInput';
import { IControllerScoopOutput } from './IControllerScoopOutput';

export interface IControllerScoop {
  (args: IControllerScoopInput): Promise<IControllerScoopOutput>;
}
