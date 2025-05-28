import { Request, Response } from "express";
import { prisma } from "../prisma/clients";

export const getAvenger = async ( req: Request, res: Response) => {
    try {
        const avenger = await prisma.avenger.findMany();
        res.json(avenger)
    } catch (error) {
        res.status(500).json({error: 'Hubo un error'})
    }
};

export const deleteAvenger = async (req: Request, res: Response) => {
    const id = Number(req.params.id);

    try {
        await prisma.avenger.delete({ where: { id } });
        res.json({ mensaje: "Avenger eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ error: "Error al eliminar Avenger" });
    }
};

export const createAvenger = async (req: Request, res: Response) => {
    const { nombre, alias, habilidades, actor } = req.body;
    try {
        const nuevoAvenger = await prisma.avenger.create({
            data: { nombre, alias, habilidades, actor } 
        });
        res.status(201).json(nuevoAvenger);        
    } catch (error) {
        res.status(500).json({error: 'Error al crear Avenger'})  
    }
};