const PacketType = {
    entity: {
        die:           0x1007,
        fire:          0x100B,
        quit:          0x100A,
        enter:         0x1009,
        health:        0x1005,
        details:       0x1001,
        position:      0x1006,
        direction:     0x1004,
        left_radius:   0x1003,
        enter_radius:  0x1002,
        stop_moviment: 0x1008,
    },

    object: {
        effect: 0x2001,
    },

    message: {
        item:    0x3005,
        event:   0x3004,
        local:   0x3002,
        global:  0x3003,
        private: 0x3001,
    }
}

module.exports = {
    PacketType
}