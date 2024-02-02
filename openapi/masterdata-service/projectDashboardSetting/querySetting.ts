// JSONResult«项目大屏设置保存请求dto»
export interface IJSONResult项目大屏设置保存请求dto {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目大屏设置保存请求dto;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目大屏设置保存请求dto
export interface I项目大屏设置保存请求dto {
    // 统计范围
    scope: string;
    // 项目类型ids
    projectTypeIds: number[];
    // 排除的项目ids
    excludeProjectIds: number[];
}
