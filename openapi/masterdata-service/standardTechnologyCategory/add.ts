// 标准工艺分类新增请求DTO
export interface I标准工艺分类新增请求DTO {
    // 父级分类id
    parentCategoryId: number;
    // 分类名称
    name: string;
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
