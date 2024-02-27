import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/生产任务分配相关/editProcessOperateUserUsingPOST
*/
export default function fetchMethod(options: { data: IProcessOperatorsEditTheDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTaskAssign/editProcessOperateUser",
            method: "post",
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
