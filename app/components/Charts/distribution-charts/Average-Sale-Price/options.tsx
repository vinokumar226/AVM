import { ScaleTypes } from "@carbon/charts";

// const blueScale = {
//   "450k-499k": "#0072c3"
// };

const allGroups = [
  "200k-249k", "250k-299k", "300k-349k", "350k-399k",
  "400k-449k", "450k-499k", "500k-549k", "550k-599k",
  "600k-649k", "650k-699k", "700k-749k", "750k-799k"
];

const colorScale = Object.fromEntries(
  allGroups.map(label => [label, label === "450k-499k" ? "#0072c3" : "#4DA5F5"])
);

export default {
  title: "Average Sale Price",
  axes: {
    bottom: {
      title: "Price Range",
      mapsTo: "group",
      scaleType: ScaleTypes.LABELS
    },
    left: {
      title: "No of Properties",
      mapsTo: "value",
      scaleType: ScaleTypes.LINEAR,
      domain: [0, 16] // This forces showing 0.5 range clearly
    }
  },
  color: { scale: colorScale },
  height: "400px",
  legend: {
    enabled: false
  }
};
