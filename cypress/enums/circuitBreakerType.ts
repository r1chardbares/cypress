export enum CircuitBreakerType {
    DO_25A = "do 25 A včetně",
    NAD_25A = "nad 25 A",
    DO_3X16 = "nad 3x10 A do 3x16 A včetně",
    DO_3X20 = "nad 3x16 A do 3x20 A včetně",
    DO_3X25 = "nad 3x20 A do 3x25 A včetně",
    DO_3X32 = "nad 3x25 A do 3x32 A včetně",
    DO_3X40 = "nad 3x32 A do 3x40 A včetně",
    DO_3X50 = "nad 3x40 A do 3x50 A včetně",
    DO_3X63 = "nad 3x50 A do 3x63 A včetně",
    NAD_3X63 ="nad 3x63 A",
}

export enum CircuitBreakerConnectionType {
    THREE_PHASE = "THREE_PHASE",
    ONE_PHASE = "ONE_PHASE",
}

