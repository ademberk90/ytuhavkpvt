import mongoose from "mongoose";
import bcrypt from "bcrypt";

const pilotSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    pic: {
      type: String,
      required: false,
    },
    token:{
      type: String,
      required: false,
    },
    status:{
      type: Boolean,
      required: false,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

pilotSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

pilotSchema.pre('save', async function(next){
  if(!this.isModified('password')){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const Pilot = mongoose.model("Pilot", pilotSchema);

export default Pilot;
