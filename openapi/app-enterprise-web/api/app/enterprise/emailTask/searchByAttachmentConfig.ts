import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16400/doc.html#/default/邮件任务/searchByAttachmentConfigUsingPOST
*/
export default function fetchMethod(options: { data: IEmailTaskAttachmentConfigQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListEmailTaskQueryResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/emailTask/searchByAttachmentConfig",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** EmailTaskAttachmentConfigQueryRequestDTO */
export interface IEmailTaskAttachmentConfigQueryRequestDTO {
    /** 应用ID列表-精确匹配 */
    refIdList?: string[];
}
/** JSONResult«List«EmailTaskQueryResponseDTO»» */
export interface IJSONResultListEmailTaskQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmailTaskQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** EmailTaskQueryResponseDTO */
export interface IEmailTaskQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** undefined */
    id?: string;
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 邮件主题 */
    title?: string;
    /** 发送方式 */
    sendingMode?: EEmailTaskQueryResponseDTO_sendingMode;
    /** 任务状态 */
    status?: EEmailTaskQueryResponseDTO_status;
}

export enum EEmailTaskQueryResponseDTO_sendingMode {
    /** 单次 */
    SINGLE = "SINGLE",
    /** 多次 */
    MULTIPLE = "MULTIPLE"
}

export enum EEmailTaskQueryResponseDTO_status {
    /** 生效中 */
    IN_ACTIVE = "IN_ACTIVE",
    /** 已停用 */
    DEACTIVATED = "DEACTIVATED",
    /** 已完成 */
    COMPLETED = "COMPLETED"
}
