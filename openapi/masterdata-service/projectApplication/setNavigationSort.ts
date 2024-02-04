// 项目应用导航排序请求对象
export interface IProjectApplicationNavigationSortRequestObjects {
    // undefined
    projectId: number;
    // undefined
    projectApplicationIds: number[];
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
