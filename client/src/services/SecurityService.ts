import React, { useEffect, useState } from 'react';
import * as forge from 'node-forge';
import { api } from "@/lib/axios";
import { ISecurity } from '@/commons/interfaces';


const send = (security: ISecurity) => {

    return api.post('/security', security);
}



/*useEffect(() => {
    const generateRSAKeyPair = () => {
        const keyPair = forge.pki.rsa.generateKeyPair({ bits: 2048 });

        const publicKeyPem = forge.pki.publicKeyToPem(keyPair.publicKey);
        const privateKeyPem = forge.pki.privateKeyToPem(keyPair.privateKey);

        setPublicKey(publicKeyPem);
        setPrivateKey(privateKeyPem);
    };

    generateRSAKeyPair();
}, []);*/


const SecurityService = {
    send

}

export default SecurityService;