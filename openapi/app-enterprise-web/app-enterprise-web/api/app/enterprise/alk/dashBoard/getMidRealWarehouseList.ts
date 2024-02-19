// JSONResult«List«中间库实时库存VO»»
export interface IJSONResultListIntermediateLibraryRealTimeInventoryVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IIntermediateLibraryRealTimeInventoryVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 中间库实时库存VO
export interface IIntermediateLibraryRealTimeInventoryVO {
    // 产品名称
    materialName: string;
    // 规格
    materialSpec: string;
    // 库存数量
    storageUseQuantity: number;
}
