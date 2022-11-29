import { NextApiRequest, NextApiResponse } from 'next'

export default function handle(req: NextApiRequest, res: NextApiResponse) {
    return res.status(200).json({
        data: [
            { id: 1, name: 'Valdir' },
            { id: 2, name: 'Guilherme' },
            { id: 3, name: 'Henrique' }
        ]
    })
}