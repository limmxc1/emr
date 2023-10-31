const items = {
    subjective: [
        {
            "label": "Subjective",
            "id": "subjective",
            "default": "Client agreeable for therapy, nil pain/SOB/cough/dizziness"
        },
        {
            "label": "Fall Hx",
            "id": "ƒallHx",
            "default": ""
        },
        {
            "label": "Living Environment",
            "id": "livingEnv",
            "default": ""
        },
        {
            "label": "Social Hx",
            "id": "socialHx",
            "default": ""
        },
        {
            "label": "Routines",
            "id": "routine",
            "default": ""
        },
        {
            "label": "Client/Family Expectations",
            "id": "expectations",
            "default": ""
        }
    ],
	objective: [
		{
			"label": "Vitals",
			"id": "vitals",
			"default": "Stable, refer to vitals chart"
		},
		{
			"label": "Cognition",
			"id": "cognition",
			"default": "Alert and participative, able to follow ___ step instructions consistently"
		},
		{
			"label": "MMT",
			"id": "mmt",
			"default": "Hip flexion: \nHip abduction: \nHip extension: \nKnee extension: \nAnkle plantarflexion: \nAnkle dorsiflexion"
		},
		{
			"label": "Balance",
			"id": "balance",
			"types": [
				{label: "Static sitting", id: "staticSitting"},
				{label: "Dynamic sitting", id: "dynamicSitting"},
				{label: "Static standing", id: "staticStanding"},
				{label: "Dynamic standing", id: "dynamicStanding"}
			]
		},
		{
			"label": "Functional Mobility",
			"id": "funcMob",
			"types": [
				{label: "Rolling", id: "rolling"},
				{label: "Lying to sitting", id: "lyingToSitting"},
				{label: "STS", id: "sts"},
				{label: "Ambulation", id: "ambulation"},
				{label: "Kerbs", id: "kerbs"},
				{label: "Stairs", id: "stairs"},
			]
		},
		{
			"label": "Gait",
			"id": "gait",
			"default": ""
		},
		{
			"label": "Analysis",
			"id": "analysis",
			"default": "Reduced LL strength\nReduced standing balance\nReduced independence in functional mobility\nIncrease fall risk\nReduced exercise tolerance"
		},
		{
			"label": "Treatment",
			"id": "treatment",
			"default": ""
		},
		{
			"label": "Evaluation",
			"id": "evaluation",
			"default": "Tolerated session well."
		},
		{
			"label": "Plan",
			"id": "plan",
			"default": ""
		}
	]
}

export default items