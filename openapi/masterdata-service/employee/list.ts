import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:16700/doc.html#/default/员工相关/listUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListEmployeeBaseResponseDTO>(
        {
            url: "/masterdata-service/employee/list",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«员工基础响应 DTO»» */
export interface IJSONResultListEmployeeBaseResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IEmployeeBaseRespondsToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 员工基础响应 DTO */
export interface IEmployeeBaseRespondsToDTO {
    /** 出生日期 */
    birthday?: number;
    /** 员工工号 */
    code?: string;
    /** 任职部门id */
    departmentId?: string;
    /** 离职日期 */
    dimissionTime?: number;
    /** 学历 */
    educational?: EEmployeeBaseRespondsToDTO_educational;
    /** 邮箱 */
    email?: string;
    /** 入职日期 */
    entryTime?: number;
    /** 性别 */
    gender?: EEmployeeBaseRespondsToDTO_gender;
    /** id */
    id?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 员工姓名 */
    name?: string;
    /** 籍贯 */
    nativePlace?: string;
}

export enum EEmployeeBaseRespondsToDTO_educational {
    /** 小学 */
    PRIMARY = "PRIMARY",
    /** 初中 */
    JUNIOR = "JUNIOR",
    /** 高中 */
    HIGH = "HIGH",
    /** 大专 */
    COLLEGE = "COLLEGE",
    /** 本科 */
    UNDERGRADUATE = "UNDERGRADUATE",
    /** 研究生 */
    POSTGRADUATE = "POSTGRADUATE",
    /** 中技 */
    INTERMEDIATE_TECHNICAL = "INTERMEDIATE_TECHNICAL",
    /** 硕士 */
    MASTER = "MASTER",
    /** 中专 */
    TECHNICAL_SECONDARY = "TECHNICAL_SECONDARY"
}

export enum EEmployeeBaseRespondsToDTO_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
}
