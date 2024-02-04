// 标准工艺修改分类请求对象
export interface IStandardProcessModificationClassificationRequestObject {
    // 是否修改全部
    modifyAll: string;
    // 标准工艺ids
    standardTechnologyIds: number[];
    // 标准工艺分类id -- 为空就是不分类了
    standardTechnologyCategoryId: number;
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
