// 标准工艺分类修改请求DTO
export interface IStandardProcessClassificationModificationRequestDTO {
    // 父级分类id, 当添加到第一级时,传递空;
    parentCategoryId: number;
    // 分类id
    id: number;
    // 名称
    name: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
