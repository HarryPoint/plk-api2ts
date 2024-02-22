// http://47.108.139.107:16700/doc.html#/default/项目应用相关/setNavigationSortUsingPOST
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
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
