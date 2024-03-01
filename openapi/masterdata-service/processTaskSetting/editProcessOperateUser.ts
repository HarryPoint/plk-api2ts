import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序任务设置相关/editProcessOperateUserUsingPOST
*/
export default function fetchMethod(options: { data: IProcessOperatorsEditTheDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
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
    /** 工序id */
    processId: string;
    /** 操作员id */
    userIds?: string[];
    /** 员工类型 */
    userType: EProcessOperatorsEditTheDTO_userType;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum EProcessOperatorsEditTheDTO_userType {
    /** 生产 */
    PRODUCE = "PRODUCE",
    /** 质量 */
    QUALITY = "QUALITY"
}
