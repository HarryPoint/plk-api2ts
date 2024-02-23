import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/应用服务包相关/getByIdUsingGET
export default function fetchMethod(params: { id: number }) {
    return http<IJSONResultApplicationServicePackResponse>({
        url: "/flow-service/appServicePack/getById",
        method: "get",
        params,
    });
}
// JSONResult«应用服务包响应»
export interface IJSONResultApplicationServicePackResponse {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IApplicationServicePackResponse;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 应用服务包响应
export interface IApplicationServicePackResponse {
    // ID
    id: number;
    // 服务对象ID
    serviceObjectId: number;
    // 服务对象编码
    serviceObjectCode: string;
    // 服务对象名称
    serviceObjectName: string;
    // 应用列表
    applicationList: IApplicationServicePackDetailsResponse[];
    // 创建状态
    status: string;
    // 错误消息
    errorMsg: string;
    // 应用级别
    applicationLevel: string;
}
// 应用服务包明细响应
export interface IApplicationServicePackDetailsResponse {
    // ID
    id: number;
    // 应用
    flowPathId: number;
    // 应用编码
    flowPathCode: string;
    // 应用名称
    flowPathName: string;
    // 系统状态
    flowPathSystemType: string;
    // 是否默认
    isDefault: string;
}
