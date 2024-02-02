// JSONResult«List«工序选择返回VO»»_1
export interface IJSONResultList工序选择返回VO_1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工序选择返回VO_1[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序选择返回VO_1
export interface I工序选择返回VO_1 {
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
