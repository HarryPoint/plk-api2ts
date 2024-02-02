// 标准工艺分类排序请求DTO
export interface I标准工艺分类排序请求DTO {
    // 父级分类id, 当移动到第一级时,传递空;
    parentCategoryId: number;
    // 分类id
    id: number;
    // 移动后所处父级分类下的第几个位置
    sort: number;
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
