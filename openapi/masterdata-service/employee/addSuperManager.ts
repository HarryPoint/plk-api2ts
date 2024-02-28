import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/员工相关/addSuperManagerUsingPOST
*/
export default function fetchMethod(options: { data: INewRequestDTOForEmployeeOvermanagement }, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/employee/addSuperManager",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 员工超管新增请求DTO */
export interface INewRequestDTOForEmployeeOvermanagement {
    /** 员工姓名 */
    name: string;
    /** 登录密码 */
    password: string;
}
/** JSONResult«long» */
export interface IJSONResultlong {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
