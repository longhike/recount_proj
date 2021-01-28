const famObj = {
    "Sam": {
        "children": [],
        "siblings": ["Hannah", "Sophie"],
        "parents": ["Tom", "Deborah"]
    },
    "Hannah": {
        "children": [],
        "siblings": ["Sam", "Sophie"],
        "parents": ["Tom", "Deborah"]
    },
    "Sophie": {
        "children": [],
        "siblings": ["Sam", "Hannah"],
        "parents": ["Tom", "Deborah"]
    },
    "Tom": {
        "children": ["Sam", "Hannah", "Sophie"],
        "siblings": ["Jane", "Nick"],
        "parents": ["Mary", "Bob - d"]
    },
    "Deborah": {
        "children": ["Sam", "Hannah", "Sophie"],
        "siblings": ["Gaby", "Josh"],
        "parents": ["Joanne", "Mort"]
    },
    "Joanne": {
        "children": ["Gaby", "Deborah", "Josh"],
        "siblings": [],
        "parents": []
    },
    "Mort": {
        "children": ["Gaby", "Deborah", "Josh"],
        "siblings": [],
        "parents": []
    },
    "Mary": {
        "children": ["Tom", "Jane", "Nick"],
        "siblings": [],
        "parents": []
    },
    "Bob": {
        "children": ["Tom", "Jane", "Nick"],
        "siblings": [],
        "parents": []
    }
}