import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序任务设置相关/editProcessDefaultOperateUserUsingPOST
*/
export default function fetchMethod(options: { data: IProcedureTaskSettingDefaultOperatorEditsDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/processTaskSetting/editProcessDefaultOperateUser",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序任务设置默认操作员编辑DTO */
export interface IProcedureTaskSettingDefaultOperatorEditsDTO {
    /** 默认操作员ids */
    defaultUserIds?: string[];
    /** 工序id */
    processId: string;
    /** 员工类型 */
    userType: EProcedureTaskSettingDefaultOperatorEditsDTO_userType;
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

export enum EProcedureTaskSettingDefaultOperatorEditsDTO_userType {
    /** 生产 */
    PRODUCE = "PRODUCE",
    /** 质量 */
    QUALITY = "QUALITY"
}
