// JSONResult«宝晶销售发货报表包材表头响应对象»
export interface IJSONResult宝晶销售发货报表包材表头响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I宝晶销售发货报表包材表头响应对象;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 宝晶销售发货报表包材表头响应对象
export interface I宝晶销售发货报表包材表头响应对象 {
    // 包材表头
    packagingMaterialHeaders: IIdCodeName通用传输对象[];
}
// Id Code Name 通用传输对象
export interface IIdCodeName通用传输对象 {
    // id
    id: number;
    // code
    code: string;
    // name
    name: string;
}
