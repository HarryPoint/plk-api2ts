// JSONResult«List«区域工序选择返回VO»»_1
export interface ITheJSONResultListAreaOperationSelectionReturnsVO1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IAreaOperationSelectionReturnsVO1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 区域工序选择返回VO_1
export interface IAreaOperationSelectionReturnsVO1 {
    // id
    id: number;
    // 工序名称
    name: string;
    // 工序编号
    code: string;
    // 区域id
    areaId: number;
    // 区域名称
    areaName: string;
}
