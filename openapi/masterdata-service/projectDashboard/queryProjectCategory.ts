// JSONResult«List«项目大类分布响应对象»»
export interface IJSONResultList项目大类分布响应对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目大类分布响应对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目大类分布响应对象
export interface I项目大类分布响应对象 {
    // 项目大类名称
    projectCategoryName: string;
    // 项目大类编号
    projectCategory: string;
    // 分布数量
    distributeQuantity: number;
}
