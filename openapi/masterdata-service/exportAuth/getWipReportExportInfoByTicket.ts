// JSONResult«导出信息«WIP统计报表返回VO»»
export interface IJSONResult导出信息WIP统计报表返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I导出信息WIP统计报表返回VO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 导出信息«WIP统计报表返回VO»
export interface I导出信息WIP统计报表返回VO {
    // 导出类型
    exportType: string;
    // 数据
    itemList: IWIP统计报表返回VO[];
}
// WIP统计报表返回VO
export interface IWIP统计报表返回VO {
    // 物料id
    materialId: number;
    // 物料名称
    materialName: string;
    // 物料编号
    materialCode: string;
    // 所有工序库存信息
    allProcessWarehouse: IWIP库存统计报表返回VO;
    // 工序信息集
    processList: IWIP工序统计报表返回VO[];
}
// WIP库存统计报表返回VO
export interface IWIP库存统计报表返回VO {
    // 总数
    totalQuantity: number;
    // 正常总数
    normalTotalQuantity: number;
    // 异常总数
    exceptionTotalQuantity: number;
    // 在制前总数
    beforeTotalQuantity: number;
    // 在制前正常数
    beforeNormalQuantity: number;
    // 在制前异常数
    beforeExceptionQuantity: number;
    // 在制中总数
    inTotalQuantity: number;
    // 在制中正常数
    inNormalQuantity: number;
    // 在制中异常数
    inExceptionQuantity: number;
}
// WIP工序统计报表返回VO
export interface IWIP工序统计报表返回VO {
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 工序库存集
    warehouse: IWIP库存统计报表返回VO;
}
