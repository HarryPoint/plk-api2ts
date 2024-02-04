// 标准工艺修改分类请求对象_1
export interface IStandardProcessModificationClassificationRequestObject1 {
    // 是否删除全部
    removeAll: string;
    // 标准工艺ids
    standardTechnologyIds: number[];
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
