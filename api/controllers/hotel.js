import Hotel from "../models/Hotel.js";

export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);
    } catch (error) {
        res.status(500).json(err)
        next (err)
    }
}

export const updatedHotel = async (req, res) => {
      try {
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body}, 
            {new: true}
            )
        res.status(200).json(updatedHotel);
    } catch (error) {
        next (err)
    }
}

export const deleteHotel = async (req, res) => {
    try {
        const deleteHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted...");
    } catch (error) {
        next (err)
    }
}

export const getHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);
    } catch (error) {
        next (err)
    }
}

export const getHotels = async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        next (err)
    }
}