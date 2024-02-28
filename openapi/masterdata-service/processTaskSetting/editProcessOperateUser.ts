import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序任务设置相关/editProcessOperateUserUsingPOST
*/
export default function fetchMethod(options: { data: IProcessOperatorsEditTheDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/processTaskSetting/editProcessOperateUser",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序操作员编辑DTO */
export interface IProcessOperatorsEditTheDTO {
    /** 员工类型 */
    userType: EProcessOperatorsEditTheDTO_userType;
    /** 工序id */
    processId: string;
    /** 操作员id */
    userIds?: string[];
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcessOperatorsEditTheDTO_userType {
    /** 生产 */
    PRODUCE = "PRODUCE",
    /** 质量 */
    QUALITY = "QUALITY"
}
