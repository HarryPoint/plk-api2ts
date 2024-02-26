import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/应用相关/listAllUsingPOST
*/
export default function fetchMethod(options: { data: IApplyBasicInformationToQueryObjects }, extraOptions?: any) {
    return http<IJSONResultListBasicFlowInformationRespondsToTheDTO>(
        {
            url: "/flow-service/application/listAll",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 应用基本信息查询对象 */
export interface IApplyBasicInformationToQueryObjects {
    /** 应用服务包ID */
    appServicePackId?: number;
    /** 应用级别 */
    applicationLevel?: string;
}
/** JSONResult«List«流程基本信息响应DTO»» */
export interface IJSONResultListBasicFlowInformationRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessBasicInformationRespondsToTheDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程基本信息响应DTO */
export interface IProcessBasicInformationRespondsToTheDTO {
    /** id */
    id?: number;
    /** 编号 */
    code?: string;
    /** 应用类型 */
    type?: string;
    /** 最新版本号 */
    lastVersionRank?: number;
    /** 最新版本流程名称 */
    lastName?: string;
    /** 最新版本简介 */
    lastDescription?: string;
    /** 最新发布终端值合计 */
    lastPublishTotal?: number;
    /** 是否系统级流程 */
    isSystem?: string;
    /** 系统流程类型 */
    flowPathSystemType?: string;
    /** 是否是树状应用 */
    isTree?: string;
    /** 是否是多流程 */
    isMultiFlow?: string;
    /** 排序 */
    sort?: number;
    /** 流程结果通知 */
    flowPathResultNotify?: string;
    /** 重新提交通知 */
    recommitNotify?: string;
    /** 作废停用通知 */
    invalidNotify?: string;
    /** 删除通知 */
    deleteNotify?: string;
    /** 应用访问链接 */
    accessUrl?: string;
    /** 应用服务包ID */
    appServicePackId?: number;
    /** 应用级别 */
    applicationLevel?: string;
}
