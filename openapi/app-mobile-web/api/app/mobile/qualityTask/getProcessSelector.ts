// JSONResult«List«工序选择返回VO»»
export interface ITheJSONResultListOperationSelectsToReturnVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcedureSelectionReturnsVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序选择返回VO
export interface IProcedureSelectionReturnsVO {
    // id
    id: number;
    // 工序名称
    name: string;
    // 工序编号
    code: string;
    // 区域id
    areaId: string;
    // 区域名称
    areaName: string;
}