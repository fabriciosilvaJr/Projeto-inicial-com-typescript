import {Router, Request, Response, NextFunction} from 'express';
import { REQUEST_HEADER_FIELDS_TOO_LARGE, StatusCodes } from 'http-status-codes';

const statusRoute = Router();

statusRoute.get('/status',(req: Request, res: Response, next: NextFunction)=>{
    res.sendStatus(StatusCodes.OK)

})

export default statusRoute;