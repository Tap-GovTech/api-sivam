import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as CryptoJS from 'crypto-js';
import * as crypto from 'crypto';

@Injectable()
export class GuardsModule implements CanActivate {

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        // return true
        const request = context.switchToHttp().getRequest();
        const authHeader = request.headers.authorization;

        if (!authHeader) return false;

        // console.log('Password: ', crypto.createHmac('sha256', 'DIF-Contenido-2022').digest('hex'));

        const descryptedAuth = CryptoJS.AES.decrypt(authHeader, 'tapachula.gob.mx');
        const descryptedString = CryptoJS.enc.Utf8.stringify(descryptedAuth);

        const expectedDate = new Date().getTime();

        const [key,time] = descryptedString.split('|');
        const  timeExp = parseInt(time) + 30000;
        
        if (key =='DS20212024*' && timeExp >= expectedDate) return true;
    }

}
