// id集合信息
export interface IIdCollectionInformation {
    // id集合
    ids: number[];
}
// JSONResult«List«工序选择返回VO»»
export interface IJSONResultList工序选择返回VO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I工序选择返回VO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 工序选择返回VO
export interface I工序选择返回VO {
    // id
    id: number;
    // 工序名称
    name: string;
    // 工序编号
    code: string;
    // 区域id
    areaId: number;
    // 区域
    area: I区域VO_1;
}
// 区域VO_1
export interface I区域VO_1 {
    // id
    id: number;
    // 区域名称
    name: string;
    // 区域编号
    code: string;
    // 父级id
    parentId: number;
}
