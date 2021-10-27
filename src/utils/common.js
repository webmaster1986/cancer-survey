export const getFromStorage = key => {
  return localStorage.getItem(key);
};

export const removeFromStorage = key => {
  return localStorage.removeItem(key);
};

export const clearStorage = () => {
  const number_of_visit = localStorage.getItem("number_of_visit");
  localStorage.clear();
  if (number_of_visit) {
    localStorage.setItem("number_of_visit", number_of_visit);
  }
};

export const getAuthToken = () => localStorage.getItem("AuthToken");

export const COMMON_LOCATION = [
  { key: 1, label: "Anal gland/sac", location: [] },
  { key: 2, label: "Bladder", location: [] },
  { key: 3, label: "Brain", location: [] },
  { key: 4, label: "Mammary gland", location: [] },
  {
    key: 5,
    label: "Mouth",
    location: [
      { key: 1, label: "Lip", location: [] },
      { key: "Tongue", label: "Tongue", location: [] },
      { key: "Gums", label: "Gums", location: [] },
      { key: "Tooth", label: "Tooth", location: [] },
      { key: "Upper jaw", label: "Upper jaw", location: [] },
      { key: "Lower jaw", label: "Lower jaw", location: [] },
      { key: "Other", label: "Other", location: [] },
      { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
    ]
  },
  {
    key: "Bone",
    label: "Bone",
    location: [
      {
        key: "Limb",
        label: "Limb",
        location: [
          {
            key: "Front",
            label: "Front",
            location: [
              {
                key: "Right",
                label: "Right",
                location: [
                  {
                    key: "Leg",
                    label: "Leg",
                    location: [
                      {
                        key: "Front",
                        label: "Front",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          {
                            key: "Bone",
                            label: "Bone",
                            location: [
                              {
                                key: "Scapula (shoulder blade)",
                                label: "Scapula (shoulder blade)",
                                location: []
                              },
                              {
                                key: "Humerus",
                                label: "Humerus",
                                location: []
                              },
                              { key: "Radius", label: "Radius", location: [] },
                              { key: "Ulna", label: "Ulna", location: [] },
                              { key: "Other", label: "Other", location: [] },
                              {
                                key: "I don't know",
                                label: "I don't know",
                                location: []
                              } // eslint-disable-line
                            ]
                          },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Hind",
                        label: "Hind",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          {
                            key: "Bone",
                            label: "Bone",
                            location: [
                              { key: "Pelvis", label: "Pelvis", location: [] },
                              { key: "Femur", label: "Femur", location: [] },
                              { key: "Tibia", label: "Tibia", location: [] },
                              { key: "Fibia", label: "Fibia", location: [] },
                              { key: "Other", label: "Other", location: [] },
                              {
                                key: "I don't know",
                                label: "I don't know",
                                location: []
                              } // eslint-disable-line
                            ]
                          },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Paw",
                        label: "Paw",
                        location: [
                          { key: "Bone", label: "Bone", location: [] },
                          { key: "Muscle", label: "Muscle", location: [] },
                          { key: "Nailbed", label: "Nailbed", location: [] },
                          { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      } // eslint-disable-line
                    ]
                  },
                  {
                    key: "Paw",
                    label: "Paw",
                    location: [
                      { key: "Bone", label: "Bone", location: [] },
                      { key: "Muscle", label: "Muscle", location: [] },
                      { key: "Nailbed", label: "Nailbed", location: [] },
                      { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                      { key: "Other", label: "Other", location: [] },
                      {
                        key: "I don't know",
                        label: "I don't know",
                        location: []
                      } // eslint-disable-line
                    ]
                  },
                  { key: "Other", label: "Other", location: [] },
                  { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
                ]
              },
              {
                key: "Left",
                label: "Left",
                location: [
                  {
                    key: "Leg",
                    label: "Leg",
                    location: [
                      {
                        key: "Front",
                        label: "Front",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          {
                            key: "Bone",
                            label: "Bone",
                            location: [
                              {
                                key: "Scapula (shoulder blade)",
                                label: "Scapula (shoulder blade)",
                                location: []
                              },
                              {
                                key: "Humerus",
                                label: "Humerus",
                                location: []
                              },
                              { key: "Radius", label: "Radius", location: [] },
                              { key: "Ulna", label: "Ulna", location: [] },
                              { key: "Other", label: "Other", location: [] },
                              {
                                key: "I don't know",
                                label: "I don't know",
                                location: []
                              } // eslint-disable-line
                            ]
                          },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Hind",
                        label: "Hind",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          {
                            key: "Bone",
                            label: "Bone",
                            location: [
                              { key: "Pelvis", label: "Pelvis", location: [] },
                              { key: "Femur", label: "Femur", location: [] },
                              { key: "Tibia", label: "Tibia", location: [] },
                              { key: "Fibia", label: "Fibia", location: [] },
                              { key: "Other", label: "Other", location: [] },
                              {
                                key: "I don't know",
                                label: "I don't know",
                                location: []
                              } // eslint-disable-line
                            ]
                          },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Paw",
                        label: "Paw",
                        location: [
                          { key: "Bone", label: "Bone", location: [] },
                          { key: "Muscle", label: "Muscle", location: [] },
                          { key: "Nailbed", label: "Nailbed", location: [] },
                          { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      } // eslint-disable-line
                    ]
                  },
                  {
                    key: "Paw",
                    label: "Paw",
                    location: [
                      { key: "Bone", label: "Bone", location: [] },
                      { key: "Muscle", label: "Muscle", location: [] },
                      { key: "Nailbed", label: "Nailbed", location: [] },
                      { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                      { key: "Other", label: "Other", location: [] },
                      {
                        key: "I don't know",
                        label: "I don't know",
                        location: []
                      } // eslint-disable-line
                    ]
                  },
                  { key: "Other", label: "Other", location: [] },
                  { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
                ]
              },
              { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
            ]
          },
          {
            key: "Hind",
            label: "Hind",
            location: [
              {
                key: "Right",
                label: "Right",
                location: [
                  {
                    key: "Leg",
                    label: "Leg",
                    location: [
                      {
                        key: "Front",
                        label: "Front",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          {
                            key: "Bone",
                            label: "Bone",
                            location: [
                              {
                                key: "Scapula (shoulder blade)",
                                label: "Scapula (shoulder blade)",
                                location: []
                              },
                              {
                                key: "Humerus",
                                label: "Humerus",
                                location: []
                              },
                              { key: "Radius", label: "Radius", location: [] },
                              { key: "Ulna", label: "Ulna", location: [] },
                              { key: "Other", label: "Other", location: [] },
                              {
                                key: "I don't know",
                                label: "I don't know",
                                location: []
                              } // eslint-disable-line
                            ]
                          },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Hind",
                        label: "Hind",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          {
                            key: "Bone",
                            label: "Bone",
                            location: [
                              { key: "Pelvis", label: "Pelvis", location: [] },
                              { key: "Femur", label: "Femur", location: [] },
                              { key: "Tibia", label: "Tibia", location: [] },
                              { key: "Fibia", label: "Fibia", location: [] },
                              { key: "Other", label: "Other", location: [] },
                              {
                                key: "I don't know",
                                label: "I don't know",
                                location: []
                              } // eslint-disable-line
                            ]
                          },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Paw",
                        label: "Paw",
                        location: [
                          { key: "Bone", label: "Bone", location: [] },
                          { key: "Muscle", label: "Muscle", location: [] },
                          { key: "Nailbed", label: "Nailbed", location: [] },
                          { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      } // eslint-disable-line
                    ]
                  },
                  {
                    key: "Paw",
                    label: "Paw",
                    location: [
                      { key: "Bone", label: "Bone", location: [] },
                      { key: "Muscle", label: "Muscle", location: [] },
                      { key: "Nailbed", label: "Nailbed", location: [] },
                      { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                      { key: "Other", label: "Other", location: [] },
                      {
                        key: "I don't know",
                        label: "I don't know",
                        location: []
                      } // eslint-disable-line
                    ]
                  },
                  { key: "Other", label: "Other", location: [] },
                  { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
                ]
              },
              {
                key: "Left",
                label: "Left",
                location: [
                  {
                    key: "Leg",
                    label: "Leg",
                    location: [
                      {
                        key: "Front",
                        label: "Front",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          { key: "Bone", label: "Bone", location: [] },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Hind",
                        label: "Hind",
                        location: [
                          {
                            key: "Skin/subcutaneous",
                            label: "Skin/subcutaneous",
                            location: []
                          },
                          { key: "Muscle", label: "Muscle", location: [] },
                          {
                            key: "Lymph node(s)",
                            label: "Lymph node(s)",
                            location: []
                          },
                          { key: "Bone", label: "Bone", location: [] },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      },
                      {
                        key: "Paw",
                        label: "Paw",
                        location: [
                          { key: "Bone", label: "Bone", location: [] },
                          { key: "Muscle", label: "Muscle", location: [] },
                          { key: "Nailbed", label: "Nailbed", location: [] },
                          { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                          { key: "Other", label: "Other", location: [] },
                          {
                            key: "I don't know",
                            label: "I don't know",
                            location: []
                          } // eslint-disable-line
                        ]
                      } // eslint-disable-line
                    ]
                  },
                  {
                    key: "Paw",
                    label: "Paw",
                    location: [
                      { key: "Bone", label: "Bone", location: [] },
                      { key: "Muscle", label: "Muscle", location: [] },
                      { key: "Nailbed", label: "Nailbed", location: [] },
                      { key: "Skin/Pad", label: "Skin/Pad", location: [] },
                      { key: "Other", label: "Other", location: [] },
                      {
                        key: "I don't know",
                        label: "I don't know",
                        location: []
                      } // eslint-disable-line
                    ]
                  },
                  { key: "Other", label: "Other", location: [] },
                  { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
                ]
              },
              { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
            ]
          },
          { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
        ]
      },
      {
        key: "Skull",
        label: "Skull",
        location: [
          { key: "Upper jaw", label: "Upper jaw", location: [] },
          { key: "Lower jaw", label: "Lower jaw", location: [] },
          { key: "Other", label: "Other", location: [] },
          { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
        ]
      },
      { key: "Vertebra (spine)", label: "Vertebra (spine)", location: [] },
      { key: "Rib", label: "Rib", location: [] },
      { key: "Pelvis", label: "Pelvis", location: [] },
      { key: "Other", label: "Other", location: [] },
      { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
    ]
  },
  { key: "Liver", label: "Liver", location: [] },
  {
    key: "Lymph nodes(s)",
    label: "Lymph nodes(s)",
    location: [
      { key: "Single", label: "Single", location: [] },
      { key: "Multiple", label: "Multiple", location: [] },
      { key: "Other", label: "Other", location: [] },
      { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
    ]
  },
  {
    key: "Skin/subcutaneous",
    label: "Skin/subcutaneous",
    location: [
      { key: "Head", label: "Head", location: [] },
      { key: "Neck", label: "Neck", location: [] },
      { key: "Back", label: "Back", location: [] },
      { key: "Chest", label: "Chest", location: [] },
      { key: "Abdomen", label: "Abdomen", location: [] },
      { key: "Limb", label: "Limb", location: [] },
      { key: "Tail", label: "Tail", location: [] },
      { key: "Near anus", label: "Near anus", location: [] },
      { key: "Genital", label: "Genital", location: [] },
      { key: "Several locations", label: "Several locations", location: [] },
      { key: "I don't know", label: "I don't know", location: [] },
      { key: "Other", label: "Other", location: [] } // eslint-disable-line
    ]
  },
  { key: "Spleen", label: "Spleen", location: [] },
  { key: "I don't know", label: "I don't know", location: [] } // eslint-disable-line
];
