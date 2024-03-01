import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/企业客户相关/getSuperManagerUsingPOST
*/
export default function fetchMethod(options: { params: { Id?: string } }, extraOptions?: any) {
    return http<IJSONResultTheSuperAdministratorRespondsToTheDTO>(
        {
            url: "/plk-uaa-service/enterprise/getSuperManager",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«超级管理员用户响应 DTO» */
export interface IJSONResultTheSuperAdministratorRespondsToTheDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheSuperAdministratorRespondsToTheDTO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 超级管理员用户响应 DTO */
export interface ITheSuperAdministratorRespondsToTheDTO {
    /** 员工id */
    employeeId?: string;
    /** 角色id */
    roleId?: string;
    /** 用户id */
    userId?: string;
}
