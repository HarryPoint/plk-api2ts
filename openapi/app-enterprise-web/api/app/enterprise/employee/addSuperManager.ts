import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/员工相关/addSuperManagerUsingPOST
*/
export default function fetchMethod(data: INewRequestDTOForEmployeeOvermanagement, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/app-enterprise-web/api/app/enterprise/employee/addSuperManager",
            method: "post",
            data,
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
    data?: number;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
