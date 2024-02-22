// http://47.108.139.107:16700/doc.html#/default/项目应用相关/queryProjectApplicationUsingPOST
// 项目应用请求对象
export interface IProjectApplicationRequestObject {
    // 项目id
    projectId: number;
    // 项目id
    flowPathSystemType: string;
}
// JSONResult«项目应用返回对象»
export interface ITheJSONResultProjectApplicationReturnsTheObject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: ITheProjectApplicationReturnsTheObject;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目应用返回对象
export interface ITheProjectApplicationReturnsTheObject {
    // id
    id: number;
    // 项目id
    projectId: number;
    // 流程应用id
    flowPathId: number;
    // 流程应用code
    flowPathCode: string;
    // 应用名称
    flowPathName: string;
    // 应用类型
    flowPathSystemType: string;
    // 应用类型
    projectApplicationType: string;
    // 导航排序
    navigationSort: number;
    // 数据状态 0停用，1启用，2暂存，-1已删除
    dataStatus: number;
}
