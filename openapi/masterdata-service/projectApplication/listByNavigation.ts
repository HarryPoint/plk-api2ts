// JSONResult«List«项目应用返回对象»»
export interface IJSONResultList项目应用返回对象 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: I项目应用返回对象[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 项目应用返回对象
export interface I项目应用返回对象 {
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
