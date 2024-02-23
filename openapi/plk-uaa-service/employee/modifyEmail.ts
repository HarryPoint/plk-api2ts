import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/员工相关/modifyEmailUsingPOST
export default function fetchMethod(data: IEmployeeModifiesEmailToRequestDTO) {
    return http<IJSONResultobject>({
        url: "/plk-uaa-service/employee/modifyEmail",
        method: "post",
        data,
    });
}
// 员工修改邮箱请求DTO
export interface IEmployeeModifiesEmailToRequestDTO {
    // 邮件
    email: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
